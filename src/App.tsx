import { useState } from "react";
import {
  Box,
  Button,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { FormContainer } from "./styles/form-style";
import PDFGenerator from "./PDFGenerator";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { z } from "zod";

const schema = z.object({
  value: z.string().min(1, "Este campo não pode ser vazio"),
});

function App() {
  const [client, setClient] = useState<string>();
  const [value, setValue] = useState<number>(0);
  const [cpf, setCpf] = useState<string>();
  const [product, setProduct] = useState<string>();
  const [city, setCity] = useState<string>();
  const [date, setDate] = useState<any>();
  const [sender, setSender] = useState<string>();
  const [cpfSender, setCpfSender] = useState<string>();
  const [payType, setPayType] = useState<any>();
  const [showPDF, setShowPDF] = useState<boolean>(false);

  const handleGeneratePDF = (e: any) => {
    e.preventDefault();
    setShowPDF(true);
  };

  return (
    <FormContainer>
      <Typography variant="h4" fontWeight={"bold"}>
        Recibo
      </Typography>
      <form onSubmit={handleGeneratePDF}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            p: 2,
            height: "70vh",
          }}
        >
          <div>
            <TextField
              id="value"
              label="Valor"
              variant="outlined"
              size="small"
              type="number"
              required
              sx={{ width: "100%" }}
              onChange={(e) => setValue(Number(e.target.value))}
            />
          </div>

          <div style={{ display: "flex" }}>
            <TextField
              id="client"
              label="Cliente"
              variant="outlined"
              size="small"
              required
              sx={{ pr: 1 }}
              onChange={(e) => setClient(e.target.value)}
            />

            <TextField
              id="cpf"
              label="CPF ou CNPJ do Cliente"
              variant="outlined"
              size="small"
              type="number"
              onChange={(e) => setCpf(e.target.value)}
            />
          </div>

          <div style={{ display: "flex" }}>
            <TextField
              id="sender"
              label="Emissor"
              variant="outlined"
              size="small"
              required
              sx={{ pr: 1 }}
              onChange={(e) => setSender(e.target.value)}
            />

            <TextField
              id="cpf"
              label="CPF ou CNPJ do Emissor"
              variant="outlined"
              size="small"
              type="number"
              onChange={(e) => setCpfSender(e.target.value)}
            />
          </div>

          <div>
            <TextField
              id="product"
              label="Referente à"
              variant="outlined"
              size="small"
              required
              sx={{ width: "100%" }}
              onChange={(e) => setProduct(e.target.value)}
            />
          </div>

          <div>
            <TextField
              id="city"
              label="Cidade"
              variant="outlined"
              size="small"
              required
              sx={{ width: "100%" }}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          <div>
            <TextField
              id="date"
              variant="outlined"
              size="small"
              type="date"
              label="Data"
              required
              InputLabelProps={{ shrink: true }}
              sx={{ width: "100%" }}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={payType}
              fullWidth
              size="small"
              onChange={(e) => setPayType(e.target.value)}
              defaultValue={1}
            >
              <MenuItem value={1}>Dinheiro</MenuItem>
              <MenuItem value={2}>Pix</MenuItem>
              <MenuItem value={3}>Cartão</MenuItem>
            </Select>
          </div>

          <Button variant="contained" type="submit">
            Gerar PDF
          </Button>

          {showPDF && (
            <div style={{ margin: "auto" }}>
              <PDFDownloadLink
                document={
                  <PDFGenerator
                    value={value}
                    client={client}
                    cpf={cpf}
                    sender={sender}
                    cpfSender={cpfSender}
                    product={product}
                    city={city}
                    date={date}
                    payType={payType}
                  />
                }
                fileName="recibo.pdf"
              >
                {({ loading }) =>
                  loading ? "Carregando documento..." : "Baixar PDF"
                }
              </PDFDownloadLink>
            </div>
          )}
        </Box>
      </form>
    </FormContainer>
  );
}

export default App;
