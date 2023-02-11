import { Button, Divider, Empty, Form, Layout, Select, Spin, Tag } from 'antd'
import Input from 'antd/es/input/Input'
import { Content, Footer, Header } from 'antd/es/layout/layout'
import Typography from 'antd/es/typography/Typography'
import { useEffect, useRef, useState } from 'react'
import useResize from './hooks/useResize'
const { Text, Title } = Typography
const thinBar = {
  height: 'min-content',
  lineHeight: 'unset',
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#376BB3',
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
  const [loading, setLoading] = useState(false)
  const [savedText, setSavedText] = useState('')
  const [savedFormat, setSavedFormat] = useState('')

  const queryResults = (text, format) => {
    setSavedText('')
    setSavedFormat('')
    setLoading(true)

    fetch(
      format === undefined //
        ? `https://loc.gov/search/?q=${text}&fo=json`
        : `https://loc.gov/${format}/?q=${text}&fo=json`
    )
      .then((response) => response.json())
      .then((data) => {
        setResults(
          data.results
            .map((d) => ({
              date: d.date || '',
              title: d.title || '',
              url: d.url || '',
              subject: d.subject || '',
              description: d.description || ''
            }))
            .slice(0, 2)
        )
        setSavedText(text)
        setSavedFormat(format)

        setLoading(false)
      })
      .catch((e) => {
        console.error(e)
      })
  }

  return { results, queryResults, loading, savedText, savedFormat }
}
function LibrarySearchTool() {
  /* state */
  const [resultPage, setResultPage] = useState(false)
  const [form] = Form.useForm()
  const width = useResize()
  const { results, queryResults, loading, savedText, savedFormat } = useData()

  /* focus on mount */
  const searchElement = useRef(null)
  useEffect(() => {
    searchElement.current.focus()
  }, [])

  const handleSubmit = (e) => {
    if (!resultPage) setResultPage(true)
    form.resetFields()
    queryResults(e['search-text'], e['search-format'])
  }

  return (
    <Layout
      style={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}>
      <Header style={thinBar}>
        <Text style={thinBarText}>{resultPage ? 'Results' : 'Catalog'}</Text>
      </Header>
      <Layout
        style={
          resultPage //
            ? width < 600
              ? { display: 'block', backgroundColor: 'black', height: '100%' }
              : { flexDirection: 'row' }
            : null
        }>
        <Content /* form container */
          style={
            !resultPage
              ? {
                  background: '#FFDD9C',

                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                  height: '100%'
                }
              : width < 600
              ? {
                  background: '#FFDD9C'
                }
              : {
                  background: '#FFDD9C',
                  display: 'flex',
                  justifyContent: 'start',
                  alignItems: 'stretch',
                  width: '33%',
                  height: '100%',
                  padding: '0 1rem'
                }
          }>
          {!resultPage && (
            <Title
              level={2}
              style={{ margin: '0 0 1rem', maxWidth: '400px' }}>
              Library of Congress
              <Divider />
              Catalog
            </Title>
          )}
          <Form
            size='large'
            layout='horizontal'
            form={form}
            name='search'
            onFinish={handleSubmit}
            style={{ width: '100%', maxWidth: '600px', padding: '1rem' }}>
            <Form.Item
              name='search-text'
              rules={[
                {
                  required: true,
                  message: 'Please enter something to search'
                }
              ]}>
              <Input
                placeholder='Search'
                ref={searchElement}
              />
            </Form.Item>
            <Form.Item
              name='search-format'
              style={{ marginBottom: '2px !important' }}>
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
            <Form.Item style={{ marginBottom: '2px !important' }}>
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
                  type='default'
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
          <Content
            style={
              width < 600
                ? {
                    textAlign: 'center',
                    backgroundColor: loading ? 'black' : '#B38836'
                  }
                : {
                    width: '66%',
                    overflowY: 'auto',
                    height: '100%',
                    padding: '0 1rem',

                    textAlign: 'center',
                    backgroundColor: loading ? 'black' : '#B38836'
                  }
            }>
            <>
              <Title
                level={5}
                style={{ marginTop: '1rem', color: 'white' }}>
                {`${loading ? 'Loading' : 'Showing'} ${savedFormat?.length > 0 ? ` ${savedFormat.toLowerCase()}` : ''} results for ${savedText}`}
              </Title>
              {loading ? (
                <Spin style={{ marginTop: '1rem' }} />
              ) : (
                <ul
                  style={{
                    listStyleType: 'none',
                    margin: '0',
                    padding: '0'
                  }}>
                  {(results?.length &&
                    results?.map((result) => (
                      <li
                        key={result.description}
                        style={{
                          backgroundColor: '#ffffff',
                          margin: '0.5rem 0',
                          padding: '0.5rem'
                        }}>
                        <Title
                          level={4}
                          style={{
                            marginTop: '0'
                          }}>
                          {result.title}
                        </Title>
                        <ul
                          style={{
                            listStyleType: 'none',
                            margin: '0',
                            padding: '0'
                          }}>
                          {result.date && (
                            <li
                              style={{
                                margin: '0.5rem 0'
                              }}>
                              <Text strong>Date: </Text>
                              {result.date}
                            </li>
                          )}
                          {result.subject && (
                            <li style={{ margin: '0.5rem 0' }}>
                              <Text strong>
                                Keywords:&nbsp;
                                {result.subject.map((s) => (
                                  <Tag
                                    key={s}
                                    color='blue'>
                                    {s}
                                  </Tag>
                                ))}
                              </Text>
                            </li>
                          )}
                          {result.description && (
                            <li style={{ margin: '0.5rem 0' }}>
                              <Text strong>Description: </Text>
                              {result.description}
                            </li>
                          )}
                          {result.url && (
                            <li style={{ marginTop: '0.5rem' }}>
                              <Button
                                size='small'
                                block
                                type='default'
                                onClick={() => {
                                  window.open(result.url, '_blank')
                                }}>
                                Read more
                              </Button>
                            </li>
                          )}
                        </ul>
                      </li>
                    ))) || <Empty />}
                </ul>
              )}
            </>
          </Content>
        ) : null}
      </Layout>
      <Footer style={thinBar}>
        <Text style={thinBarText}>Library of Congress</Text>
      </Footer>
    </Layout>
  )
}
export default LibrarySearchTool
