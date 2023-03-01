import FormField from "../Atoms/FormField/FormField";
import { useRouter } from "next/router";
import { Button } from "../Atoms/Buttons";
import { ModalWrapper, Wrapper } from "./AddPlayerModal.style";
import SelectGender from "./SelectGender";
const Modal = ({
  handleClose,
  isOpen,
  submitFormHandler,
  feedbackInputRef,
  emailInputRef,
  genderInputRef,
  date,
}) => {
  const router = useRouter();
  let turnament = router.query.turnamentId;
  return (
    <>
      <ModalWrapper
        isOpen={isOpen}
        onRequestClose={handleClose}
        ariaHideApp={false}
      >
        <Wrapper>
          <h2>Dodaj Zawodnika</h2>

          <form onSubmit={submitFormHandler}>
            <FormField
              isTextarea
              placeholder="Zawodnicy"
              ref={feedbackInputRef}
              required
              label="Zawodnicy"
              id="user"
              name="user"
            />
            <FormField
              placeholder="Nazwa Klubu"
              ref={emailInputRef}
              required
              label="Nazwa Klubu"
              id="klub"
              name="klub"
            />
            <FormField
              defaultValue={turnament}
              label="Turniej"
              id="idTurniej"
              name="idTurniej"
              disabled
            />
            <SelectGender
              placeholder="Zaznacz kategorię"
              change={genderInputRef}
              label="Płeć"
              turnament={turnament}
              date={date}
            />
            <Button downlaod type="submit">
              Wyślij
            </Button>
          </form>
        </Wrapper>

        <Button delete onClick={handleClose}>
          Zamknij okno
        </Button>
      </ModalWrapper>
    </>
  );
};
export default Modal;
