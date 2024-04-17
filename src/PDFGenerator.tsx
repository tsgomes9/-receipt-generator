import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import FormatDate from "./utils/FormatDate";
import NumberToText from "./utils/NumberText";
import SelectPayType from "./utils/SelectPayType";
import NumberGenerator from "./utils/NumberGenerator";

interface PDFProps {
  value: number;
  client?: string;
  cpf?: string;
  sender?: string;
  product?: string;
  city?: string;
  date: string;
  payType: number;
  cpfSender?: string;
}

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 40,
  },
  section: {
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: "bold",
  },
  label: {
    fontSize: 12,
    marginBottom: 5,
    fontWeight: "bold",
  },
  content: {
    fontSize: 12,
    marginBottom: 10,
  },
  border: {
    padding: 5,
    backgroundColor: "#d8daeb",
  },
  date: {
    marginTop: "30px",
    fontSize: "12px",
    fontWeight: "bold",
    margin: "auto",
  },
  number: {
    fontSize: "11px",
    color: "#9695ab",
    fontWeight: "bold",
    marginBottom: "24px",
  },
});

const PDFGenerator: React.FC<PDFProps> = ({
  value,
  client,
  cpf,
  sender,
  product,
  city,
  date,
  payType,
  cpfSender,
}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>Recibo</Text>
        <Text style={styles.number}>Nº {NumberGenerator()}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Valor:</Text>
        <Text style={[styles.content, styles.border]}>
          R$ {value} ({NumberToText(value)} reais)
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Cliente:</Text>
        <Text style={[styles.content, styles.border]}>{client}</Text>
      </View>
      {cpf && (
        <View style={styles.section}>
          <Text style={styles.label}>CPF ou CNPJ (Cliente):</Text>
          <Text style={[styles.content, styles.border]}>{cpf}</Text>
        </View>
      )}
      <View style={styles.section}>
        <Text style={styles.label}>Emissor:</Text>
        <Text style={[styles.content, styles.border]}>{sender}</Text>
      </View>
      {cpfSender && (
        <View style={styles.section}>
          <Text style={styles.label}>CPF ou CNPJ (Emissor):</Text>
          <Text style={[styles.content, styles.border]}>{cpfSender}</Text>
        </View>
      )}
      <View style={styles.section}>
        <Text style={styles.label}>Referente à:</Text>
        <Text style={[styles.content, styles.border]}>{product}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Tipo de Pagamento:</Text>
        <Text style={[styles.content, styles.border]}>
          {SelectPayType(payType)}
        </Text>
      </View>

      <Text style={styles.date}>
        {city}, {FormatDate(date)}
      </Text>
    </Page>
  </Document>
);

export default PDFGenerator;
