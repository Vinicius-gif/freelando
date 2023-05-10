import { Col, Container, Row } from "react-grid-system";
import { CampoTexto } from "./componentes/CampoTexto/CampoTexto";
import { Card } from "./componentes/Card/Card";
import { Estilos } from "./componentes/EstilosGlobais/Estilos";
import { ProvedorTema } from "./componentes/ProvedorTema/ProvedorTema";
import { Tipografia } from "./componentes/Tipografia/Tipografia";
import { Botao } from "./componentes/Botao/Botao";
import { Cabecalho } from "./componentes/Cabecalho/Cabecalho";
import { FreelandoLogo } from "./componentes/Icones/FreelandoLogo";
import { Link } from "./componentes/Link/Link";

function App() {
  return (
    <ProvedorTema>
      <Estilos />
      <Cabecalho>
        <Container>
          <Row align="center">
            <Col>
              <FreelandoLogo />
            </Col>
            <Col style={{ textAlign: 'right' }}>
              <Link>Login</Link>
            </Col>
          </Row>
        </Container>
      </Cabecalho>
      <Container style={{ margin: '80px 0' }}>
        <Row justify="center">
          <Col lg={6} md={8} sm={12}>
            <Card>
              <Row>
                <Col lg={12} md={12} sm={12}>
                  <Tipografia variante="h1" componente="h1">
                    Freelando
                  </Tipografia>
                  <Tipografia variante="body" componente="body">
                    Crie seu perfil gratuitamente para começar a trabalhar com os melhores freelancers. Em seguida, você poderá dar mais detalhes sobre suas demandas e sobre sua forma de trabalho.
                  </Tipografia>
                  <CampoTexto titulo='Nome Completo' />
                </Col>
              </Row>
              <Row>
                <Col lg={4} md={4} sm={4}>
                  <CampoTexto titulo='Cidade' />
                </Col>
                <Col lg={8} md={8} sm={8}>
                  <CampoTexto titulo='Estado' />
                </Col>
              </Row>
              <Row>
                <Col>
                  <CampoTexto titulo='E-mail' />
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={6} sm={6}>
                  <CampoTexto titulo='Senha' />
                </Col>
                <Col lg={6} md={6} sm={6}>
                  <CampoTexto titulo='Repita a senha' />
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={6} sm={6}>
                  <Botao variante="secundaria">
                    Anterior
                  </Botao>
                </Col>
                <Col lg={6} md={6} sm={6}>
                  <div style={{ textAlign: 'right' }}>
                    <Botao>
                      Próxima
                    </Botao>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </ProvedorTema>
  );
}

export default App;
