import FormField from "../../Atoms/FormField/FormField";
import { Button } from "../../Atoms/Buttons";
import { ModalWrapper, Wrapper } from "./Modal.styled";

const Modal = ({
  handleClose,
  isOpen,
  submitFormHandler,
  titleInputRef,
  textInputRef,
  signatureInputRef,
}) => {
  return (
    <>
      <ModalWrapper isOpen={isOpen} onRequestClose={handleClose}>
        <Wrapper>
          <form onSubmit={submitFormHandler}>
            <FormField
              placeholder="Tytuł"
              ref={titleInputRef}
              required
              label="Tytuł"
              id="title"
              name="title"
            />
            <FormField
              isTextarea
              label="Text"
              name="text"
              ref={textInputRef}
              id="text"
              placeholder="Tytuł"
              required
            />
            <FormField
              label="Autor tekstu"
              id="signature"
              name="signature"
              ref={signatureInputRef}
              placeholder="Autor tekstu"
              required
            />
            <Button upload type="submit">
              Wyślij
            </Button>
          </form>
        </Wrapper>
        <Button delete onClick={handleClose}>
          Zamknij
        </Button>
      </ModalWrapper>
    </>
  );
};

export default Modal;
