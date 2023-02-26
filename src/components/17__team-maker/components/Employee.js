export default Article = (employeeProps) => {
  const { name, email, id, role } = employeeProps
  const { handleChangeName, handleSaveEmployee, handleDeleteEmployee, handleChangeRole, handleChangeEmail } = employeeProps
  return (
    <EmployeeProvider>
      <article className={`employee ${role === 0 ? 'manager' : role === 1 ? 'engineer' : role === 2 ? 'intern' : ''}`}>
        <Card
          className='employee-card'
          bordered={false}
          title={
            <Input
              value={name}
              onChange={() => {
                handleChangeName(id, e.target.value)
              }}
            />
          }
          extra={
            <Button
              type='primary'
              shape='default'
              block
              onClick={handleSaveEmployee}>
              <FontAwesomeIcon icon={faSave} />
            </Button>
          }
          actions={[
            <Button
              type='primary'
              shape='default'
              danger
              onClick={handleDeleteEmployee}>
              <FontAwesomeIcon icon={faTrash} />
            </Button>
          ]}>
          <table>
            <tbody>
              <tr>
                <th>Role</th>
                <td>
                  <Select
                    bordered={false}
                    value={role}
                    onChange={handleChangeRole}
                    options={[
                      { label: 'Manager', value: 0 },
                      { label: 'Engineer', value: 1 },
                      { label: 'Intern', value: 2 }
                    ]}></Select>
                </td>
              </tr>
              <tr>
                <th>Email</th>
                <td>
                  <Input
                    value={email}
                    onChange={handleChangeEmail}
                  />
                </td>
              </tr>
              <tr>
                <th>ID</th>
                <td>{id}</td>
              </tr>
            </tbody>
          </table>
        </Card>
      </article>
    </EmployeeProvider>
  )
}
