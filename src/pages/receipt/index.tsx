import { useState } from "react";
import { FormContainer } from "./styles/form-style";
import {
  Box,
  Button,
  FormControlLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFGenerator from "./PDFGenerator";
import { useNavigate } from "react-router-dom";

export default function Receipt() {
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
  const [signature, setSignature] = useState<string>("signature");

  const navigate = useNavigate();

  const handleGeneratePDF = (e: any) => {
    e.preventDefault();
    setShowPDF(true);
  };

  const handleSignature = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignature(e.target.value);
  };
  return (
    <FormContainer>
      <Typography variant="h4" fontWeight={"bold"} m={0}>
        Recibo
      </Typography>
      <form onSubmit={handleGeneratePDF}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            p: 2,
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
              <MenuItem value={3}>Cartão de Crédito</MenuItem>
            </Select>
          </div>

          <RadioGroup
            row
            name="row-radio-buttons-group"
            value={signature}
            onChange={(e) => handleSignature(e)}
            sx={{ margin: "auto" }}
          >
            <FormControlLabel
              value="signature"
              control={<Radio />}
              label="Com assinatura"
            />
            <FormControlLabel
              value="no-signature"
              control={<Radio />}
              label="Sem assinatura"
            />
          </RadioGroup>

          <div
            style={{ display: "flex", justifyContent: "space-between", gap: 5 }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "black",
                "&:hover": { backgroundColor: "#34353b" },
              }}
              type="submit"
              fullWidth
            >
              Gerar PDF
            </Button>

            <Button
              variant="outlined"
              type="submit"
              fullWidth
              color="warning"
              onClick={() => navigate("../")}
            >
              Cancelar
            </Button>
          </div>

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
                    signature={signature}
                  />
                }
                fileName="recibo.pdf"
              >
                {({ loading }) =>
                  loading ? (
                    "Carregando documento..."
                  ) : (
                    <Button variant="outlined">Baixar Arquivo PDF</Button>
                  )
                }
              </PDFDownloadLink>
            </div>
          )}
        </Box>
      </form>
    </FormContainer>
  );
}
