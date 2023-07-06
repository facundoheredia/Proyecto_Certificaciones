import { Row, Col } from "react-bootstrap";
import { CartesianGrid, Legend, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Line } from "recharts";

const data = [
  {
    mes: "0",
    certificado: 0,
    planDeTrabajo: 0,
  },
  {
    mes: "1",
    certificado: 6500000,
    planDeTrabajo: 6300000,
  },
  {
    mes: "2",
    certificado: 12800000,
    planDeTrabajo: 11500000,
  },
  {
    mes: "3",
    certificado: 18900000,
    planDeTrabajo: 17950000,
  },
  {
    mes: "4",
    certificado: 25300000,
    planDeTrabajo: 24000000,
  },
  {
    mes: "5",
    certificado: 33450000,
    planDeTrabajo: 31260000,
  },
  {
    mes: "6",
    certificado: 38690000,
    planDeTrabajo: 36500000,
  },
  {
    mes: "7",
    certificado: 42500650,
    planDeTrabajo: 42500650,
  },
];

const GraficoObra = () => {
  return (
    <Row className="p-2">
      <Col className="col-12 p-4 border d-flex justify-content-center align-items-center">
        <ResponsiveContainer width="95%" aspect={4}>
          <LineChart data={data} width={500} height={300} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray={"4 1 2"} />
            <XAxis dataKey="mes" />
            <YAxis type="number" domain={['0', 'dataMax']}/>
            <Tooltip />
            <Legend height={36} />
            <Line
              type="monotone"
              dataKey="certificado"
              stroke="#0d6efd"
              strokeWidth={3}
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="planDeTrabajo"
              stroke="#dc3545"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Col>
    </Row>
  );
};

export default GraficoObra;
