import React from 'react'
import "./Certificado.css"
import { Container,Table,Row } from 'react-bootstrap'

const Certificado = () => {
  return (
    <main>
        <Container fluid>
            <Row>
                <Table className='table-bordered border-dark'>
                    <thead className="bg-secondary text-dark text-center align-middle  fs-6">
                        <tr>
                            <th colSpan={2} rowSpan={2}>ITEM</th>
                            <th rowSpan={2}>DETALLE</th>
                            <th rowSpan={2}>UNIDAD</th>
                            <th colSpan={3}>CONTRATO</th>
                            <th colSpan={3}>CANTIDAD CERTIFICADA (U)</th>
                            <th colSpan={3}>IMPORTE CERTIFICADO ($)</th>
                        </tr>
                            <tr>
                            <th>CANTIDAD (U)</th>
                            <th>PRECIO UNITARIO ($)</th>
                            <th>PRECIO TOTAL ($)</th>
                            <th>ANTERIOR (U)</th>
                            <th>PRESENTE (U)</th>
                            <th>ACUMULADO (U)</th>
                            <th>ANTERIOR ($)</th>
                            <th>PRESENTE ($)</th>
                            <th>ACUMULADO ($)</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </Table>
            </Row>
        </Container>
    </main>
  )
}

export default Certificado