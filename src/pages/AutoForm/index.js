import React, { useState } from 'react'
// import { Link } from 'react-router-dom'

import { Title, Form, Text } from './styles';
import { Checkbox, Input } from 'antd'

const AutoForm = () => {
  const [insurance, setInsurance] = useState('')

  return (
    <>
      <Title>
        Questionário Cotação Automóvel
      </Title>

      <Form>
        <Text>
          * 1. Possui seguro atualmente?
        </Text>

        <Text style={{ display: 'flex', flex: 1, background: "tomato", flexDirection: "column", padding: 10, marginBottom: 40 }}>
          <Checkbox>
            Sim
          </Checkbox>
        </Text>
        <Text style={{ display: 'flex', flex: 1, background: "tomato", flexDirection: "column", padding: 10, marginBottom: 40 }}>
          <Checkbox >
            Não
          </Checkbox>
        </Text>

        <Text>
          2. Se sim, qual a data de vencimento? Seguradora? Bônus da apólice?
        </Text>
        <Text>
          * 3. Dados do Cliente
        </Text>
        <Text >
          Nome
          <Input />
        </Text>
        <Text >
          CPF
          <Input />
        </Text>
        <Text >
          Data de Nascimento
          <Input />
        </Text>
        <Text >
          Endereço Completo
          (com CEP)
          <Input />
        </Text>
        <Text >
          Endereço de E-mail
          <Input />
        </Text>
        <Text >
          Número de Telefone
          <Input />
        </Text>


        <Text >
          * 4. Estado Civil
          <Input />
        </Text>
        <Text style={{ display: 'flex', flex: 1, background: "tomato", flexDirection: "column", padding: 10, marginBottom: 40 }}>

          <Checkbox>
            Casado (a)
          </Checkbox>
        </Text>
        <Text style={{ display: 'flex', flex: 1, background: "tomato", flexDirection: "column", padding: 10, marginBottom: 40 }}>
          <Checkbox>
            Solteiro (a)
          </Checkbox>
        </Text>
        <Text style={{ display: 'flex', flex: 1, background: "tomato", flexDirection: "column", padding: 10, marginBottom: 40 }}>

          <Checkbox>
            Divorciado (a)
          </Checkbox>
        </Text>
        <Text style={{ display: 'flex', flex: 1, background: "tomato", flexDirection: "column", padding: 10, marginBottom: 40 }}>
          <Checkbox>
            Viúvo (a)
          </Checkbox>
        </Text>


        <Text >
          * 5. Dados do Veículo
        </Text>

        <Text >
          Modelo completo
          <Input />
        </Text>
        <Text >
          Ano de Fabricação/Modelo
          <Input />
        </Text>
        <Text >
          Chassi
          <Input />
        </Text>
        <Text >
          Placa
          <Input />
        </Text>
        <Text >
          RENAVAN
          <Input />
        </Text>

        <Text >
          * 6. Estilo Residência
        </Text>
        <Text style={{ display: 'flex', flex: 1, background: "tomato", flexDirection: "column", padding: 10, marginBottom: 40 }}>

          <Checkbox>
            Casa/Sobrado
          </Checkbox>
        </Text>
        <Text style={{ display: 'flex', flex: 1, background: "tomato", flexDirection: "column", padding: 10, marginBottom: 40 }}>

          <Checkbox>
            Condomínio
          </Checkbox>
        </Text>
        <Text style={{ display: 'flex', flex: 1, background: "tomato", flexDirection: "column", padding: 10, marginBottom: 40 }}>

          <Checkbox>
            Apartamento
          </Checkbox>
        </Text>


      </Form>
    </>
  )
}

export default AutoForm;