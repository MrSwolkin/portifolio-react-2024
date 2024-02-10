import {
  BtnForm,
  ContactContainer,
  FirtsInput,
  FormContainer,
  FormContent,
  SecondInput
} from './styles'

const Contato = () => (
  <ContactContainer>
    <h2>Contato</h2>
    <FormContainer
      action="https://formsubmit.co/swolkinerick@gmail.com"
      method="POST"
    >
      <FormContent>
        <FirtsInput>
          <input type="text" placeholder="Nome Completo" required />
          <input type="email" placeholder="Email" required />
        </FirtsInput>
        <SecondInput>
          <input type="phone" placeholder="Telefone/ Celular" required />
          <textarea name="" id="">
            Deixe aqui sua mensagem
          </textarea>
          <input type="hidden" name="_captcha" value="false"></input>
        </SecondInput>
        <BtnForm type="submit">Enviar</BtnForm>
      </FormContent>
    </FormContainer>
  </ContactContainer>
)

export default Contato
