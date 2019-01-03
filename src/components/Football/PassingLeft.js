import React from 'react'
import { Header, Image, Table } from 'semantic-ui-react'
import hur from './../../img/Hurricanes.png';

const HockeyLeft = () => (
<div className="border1">
<h3 className="pt-3 pl-4"><img className="img2" src={hur} alt={`Sox Profile Pic`}/> Carolina Hurricanes</h3>
<Table singleLine>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Passing <span className="space">********</span></Table.HeaderCell>
        <Table.HeaderCell>C/ATT</Table.HeaderCell>
        <Table.HeaderCell>PCT</Table.HeaderCell>
        <Table.HeaderCell>YDS</Table.HeaderCell>
        <Table.HeaderCell>TD</Table.HeaderCell>
        <Table.HeaderCell>INT</Table.HeaderCell>
        <Table.HeaderCell>QBR</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>
            <Header.Content>
              M. Breda
            </Header.Content>
        </Table.Cell>
        <Table.Cell>17/31</Table.Cell>
        <Table.Cell>54.8</Table.Cell>
        <Table.Cell>153</Table.Cell>
        <Table.Cell>2</Table.Cell>
        <Table.Cell>1</Table.Cell>
        <Table.Cell>79</Table.Cell>
      </Table.Row>
      <Table.Row className="font-weight-bold">
        <Table.Cell>Totals</Table.Cell>
        <Table.Cell>17/31</Table.Cell>
        <Table.Cell>54.8</Table.Cell>
        <Table.Cell>153</Table.Cell>
        <Table.Cell>2</Table.Cell>
        <Table.Cell>1</Table.Cell>
        <Table.Cell>79</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
  </div>
  )

  export default HockeyLeft