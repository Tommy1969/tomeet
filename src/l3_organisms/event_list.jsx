import styled from 'styled-components'

const Table = styled.table`
  width:            100%;
  border-collapse:  collapse;
  td, th {
    border:         solid thin silver;
  }
`

export const EventList = ({events, ...props}) =>
  <Table data-testid="event_list">
    <tbody>
      {events && events.map((it, idx) =>
        <tr key = {idx}>
          <th>{idx+1}</th>
          <td>{it.title}</td>
          <td>{it.place}</td>
        </tr>
      )}
    </tbody>
  </Table>
