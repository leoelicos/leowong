import { Button, Form, Layout, Select, Space } from 'antd'
import { useForm } from 'antd/es/form/Form'
import Input from 'antd/es/input/Input'
import { Content, Footer, Header } from 'antd/es/layout/layout'
import Typography from 'antd/es/typography/Typography'
import { useRef, useState } from 'react'
import useResize from './hooks/useResize'
const { Text, Title } = Typography
const thinBar = {
  height: 'min-content',
  lineHeight: 'unset',
  textAlign: 'center',
  color: '#070707',
  backgroundColor: '#f0feff',
  padding: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}
const thinBarText = {
  color: 'inherit'
}
const useData = () => {
  const [results, setResults] = useState({ results: [], searchText: '', searchFormat: '' })
  const loading = useRef(false)
  const queryResults = (text, format) => {
    console.log('here')
    loading.current = true
    fetch(format === undefined ? `https://loc.gov/search/?q=${text}&fo=json` : `https://loc.gov/${format}/?q=${text}&fo=json`)
      .then((response) => response.json())
      .then((data) => {
        console.log({ data })
        loading.current = false
        const obj = {
          results: data.results.map((d) => ({
            date: d.date || '',
            title: d.title || '',
            url: d.url || '',
            subject: d.subject || '',
            description: d.description || ''
          })),
          searchText: text,
          searchFormat: format
        }
        console.log('results object', obj)
        setResults(obj)
      })
      .catch((e) => {
        console.error(e)
      })
  }

  return { results, queryResults, loading: loading.current }
}
function LibrarySearchTool() {
  /* state */
  const [resultPage, setResultPage] = useState(false)
  const [form] = Form.useForm()
  const width = useResize()
  const { results, queryResults, loading } = useData()
  const handleSubmit = (e) => {
    console.log('submitted', e['search-text'], e['search-format'])
    if (!resultPage) setResultPage(true)

    form.resetFields()
    queryResults(e['search-text'], e['search-format'])
  }
  return (
    <Layout style={{ height: '100vh', width: '100%', display: 'flex', flexDirection: 'column' }}>
      <Header style={thinBar}>
        <Text style={thinBarText}>{resultPage ? 'Results' : 'Search'}</Text>
      </Header>
      <Layout
        style={{
          display: 'flex',
          flexDirection: resultPage && width > 600 ? 'row' : 'column',
          justifyContent: resultPage ? 'start' : 'center',
          alignItems: resultPage ? 'stretch' : 'center'
        }}>
        <Content
          style={{
            display: 'flex',
            flexDirection: resultPage && width > 600 ? 'row' : 'column',
            justifyContent: resultPage ? 'start' : 'center',
            alignItems: resultPage ? 'stretch' : 'center',
            width: width < 600 ? '100%' : '50%',
            height: resultPage && width < 600 ? 'fit-content' : '100%'
          }}>
          <Title
            level={2}
            style={{ margin: '0' }}>
            Library of&nbsp;Congress Search&nbsp;Engine
          </Title>
          <Form
            form={form}
            name='search'
            onFinish={handleSubmit}
            style={{ padding: '1rem', width: '100%', maxWidth: '400px' }}>
            <Form.Item
              name='search-text'
              rules={[
                {
                  required: true,
                  message: 'Please enter something to search'
                }
              ]}>
              <Input placeholder='Search' />
            </Form.Item>
            <Form.Item name='search-format'>
              <Select
                allowClear
                id='search-format'
                options={[
                  { value: 'maps', label: 'Maps' },
                  { value: 'audio', label: 'Audio' },
                  { value: 'photos', label: 'Photos' },
                  { value: 'manuscripts', label: 'Manuscripts' },
                  { value: 'newspapers', label: 'Newspapers' },
                  { value: 'films', label: 'Film, videos' },
                  { value: 'printed', label: 'Printed music' },
                  { value: 'websites', label: 'Websites' }
                ]}
                placeholder='Select a format...'
                style={{ textAlign: 'left' }}
              />
            </Form.Item>
            <Form.Item>
              <Button
                htmlType='submit'
                type='primary'
                id='submit-button'
                block>
                Search
              </Button>
            </Form.Item>
            {resultPage && (
              <Form.Item>
                <Button
                  type='ghost'
                  block
                  onClick={() => {
                    setResultPage(false)
                  }}>
                  Go Back
                </Button>
              </Form.Item>
            )}
          </Form>
        </Content>
        {resultPage ? (
          <Content style={{ backgroundColor: loading ? 'red' : 'green', width: width < 600 ? '100%' : '50%', overflowY: 'auto', height: '100%' }}>
            {loading ? (
              'Loading'
            ) : (
              <>
                <h1>
                  Showing{!!results.searchFormat.length ? ` ${results.searchFormat}` : ''} results for {results.searchText}
                </h1>
                <ul>
                  {results.results.map((result) => (
                    <li>
                      <h2>{result.title}</h2>
                      <ul>
                        <li>{result.url}</li>
                        <li>{result.date}</li>
                        <li>{result.subject}</li>
                        <li>{result.description}</li>
                      </ul>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </Content>
        ) : null}
      </Layout>
      <Footer style={thinBar}>
        <Text style={thinBarText}>Library Search Tool</Text>
      </Footer>
    </Layout>
  )
}
export default LibrarySearchTool
