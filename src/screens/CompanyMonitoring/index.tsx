import { Table, Row, Rows } from "react-native-table-component";
import { View } from "react-native";
import { styles } from "./styles";
import CurrentTime from "../../components/currentTime";
export default function CompanyMonitoring() {
  const tableHead = [
    "PAM PLASTICOS",
    "MONITORAMENTO DA FABRICA",
    "RMC TECHNOLOGY",
  ];

  const tableHead2 = [
    <CurrentTime />,
    "SETOR 01",
    "SETOR 02",
    "SETOR 03",
    "SETOR 04",
    "SETOR 05",
    "SETOR 06",
  ];
  const tableData = [
    ["FORA DE CICLO", "", "39 26", "44", "", "30 57 66", "59 11 13"],
    ["AGUARDANDO TECNICO", "", "", "", "", "", ""],
    ["REINICIO(DOM/FER)", "", "", "", "", "", ""],
    ["PARADA - MANUTENÇAO", "", "", "", "", "", ""],
    ["LIGACAO DE PERIFERICOS", "", "", "", "", "56 49", " 68 69"],
    ["PARADA - FERRAMENTARIA", "", "", "", "", "48 52", ""],
    ["TROCA DE MOLDE", "", "", "", "", "", ""],
    ["PARADAS M.PRIMA", "", "", "", "", "", ""],
    ["PARADA - OUTROS MOTIVOS", "", "27", "", "", "67 46", ""],
    ["ALARME DE REFUGO", "", "39", "44", "", "", "10 09 13 11"],
    ["PARADA - SP", "22", "34", "40", "65", "53 37 55", "65 28"],
  ];

  return (
    <View style={styles.container}>
      <Table borderStyle={{ borderWidth: 2, borderColor: "#fff" }}>
        <Row
          data={tableHead}
          widthArr={[200, 825, 165]}
          style={styles.head}
          textStyle={styles.text}
        />
        <Row
          data={tableHead2}
          widthArr={[200, 165, 165, 165, 165, 165, 165]}
          style={styles.sectorHead}
          textStyle={styles.text}
        />
        <Rows
          data={tableData}
          widthArr={[200, 165, 165, 165, 165, 165, 165]}
          style={styles.data}
          textStyle={styles.text}
        />
      </Table>
    </View>
  );
}
