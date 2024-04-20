import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import FormatDate from "./utils/FormatDate";
import NumberToText from "./utils/NumberText";
import SelectPayType from "./utils/SelectPayType";
import NumberGenerator from "./utils/NumberGenerator";
import FormatCPF from "./utils/FormatCPF";
import { PDFProps } from "./types/PDFProps";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 40,
  },
  section: {
    marginBottom: 10,
  },
  title: {
    fontSize: 32,
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

  date: {
    marginTop: "16px",
    fontSize: "16px",
    fontWeight: "bold",
    textAlign: "center",
  },
  number: {
    fontSize: "11px",
    color: "#9695ab",
    fontWeight: "bold",
    marginBottom: "24px",
  },
  inputField: {
    border: "1px solid grey",
    borderRadius: "4px",
    width: "35%",
    display: "flex",
    flexDirection: "row",
    gap: "10px",
    padding: "4px",
  },
  inputFieldFullWidth: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    marginTop: "12px",
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
      <div
        style={{
          border: "1px solid grey",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.title}>RECIBO</Text>

          <div style={styles.inputField}>
            <Text style={{ fontSize: "9px" }}>Nº</Text>
            <Text>{NumberGenerator()}</Text>
          </div>

          <div style={styles.inputField}>
            <Text style={{ fontSize: "9px" }}>VALOR</Text>
            <Text>R$ {value}</Text>
          </div>
        </div>

        <View style={[styles.inputField, styles.inputFieldFullWidth]}>
          <Text style={{ fontSize: "9px" }}>RECEBI(EMOS) DE</Text>
          <Text>
            {client} {cpf && " -  CPF/CNPJ: " + FormatCPF(cpf)}
          </Text>
        </View>

        <View style={[styles.inputField, styles.inputFieldFullWidth]}>
          <Text style={{ fontSize: "9px" }}>A IMPORTÂNCIA DE</Text>
          <Text>{NumberToText(value)} reais</Text>
        </View>

        <View style={[styles.inputField, styles.inputFieldFullWidth]}>
          <Text style={{ fontSize: "9px" }}>REFERENTE À</Text>
          <Text>{product}</Text>
        </View>

        <View style={[styles.inputField, styles.inputFieldFullWidth]}>
          <Text style={{ fontSize: "9px" }}>FORMA DE PAGAMENTO</Text>
          <Text>{SelectPayType(payType)}</Text>
        </View>

        <View style={[styles.inputField, styles.inputFieldFullWidth]}>
          <Text style={{ fontSize: "9px" }}>EMITENTE</Text>
          <Text>
            {sender} {cpfSender && " -  CPF/CNPJ: " + FormatCPF(cpfSender)}
          </Text>
        </View>

        <Text style={styles.date}>
          {city}, {FormatDate(date)}
        </Text>
      </div>
    </Page>
  </Document>
);

export default PDFGenerator;
