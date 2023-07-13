import '../Components-user/css-User/historyTransactionUser.css'

const HistoryTransactionUser = () => {
  return (
   <>
 <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody className="table-group-divider">
    <tr>
      <th scope="row">1</th>
      <td> </td>
      <td> </td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colSpan={2}>Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
</>
    )
}

export default HistoryTransactionUser
