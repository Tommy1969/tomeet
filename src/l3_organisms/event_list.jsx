import styled from 'styled-components'

const Table = styled.table`
  width:              100%;
  border-collapse:    collapse;
  td, th {
    border:           solid thin silver;
  }
  tr:nth-child(odd) {
    background-color: aliceblue;
  }
  tr[data-active=true] {
    color:            whitesmoke;
    background-color: slategray;
  }
`

export const EventList = ({events, focus, handleFocus, ...props}) =>
  <Table data-testid="event_list">
    <tbody>
      {events && events.map((it, idx) =>
        <tr
          key         = {idx}
          onClick     = {() => handleFocus && handleFocus(idx)}
          data-active = {focus===idx}
          >
          <th>{idx+1}</th>
          <td>{it.title}</td>
          <td>{it.place}</td>
        </tr>
      )}
    </tbody>
  </Table>
