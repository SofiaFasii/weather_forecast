import { useEffect } from "react";
import { Overlay, Modal, Title, Form, Label, Input, SubmitBtn, P } from "./signUpModal.styled";

export default function SignUpModal({isModalOpen, onModalClose, setUser}){
    useEffect(() => {
        if(!isModalOpen) return;
        const keyDown = (e) => e.key === 'Escape' && onModalClose();
        document.addEventListener('keydown', keyDown)
        document.body.style.overflow = 'hidden'
        return () => {
            document.removeEventListener('keydown', keyDown)
            document.body.style.overflow = ''
        }
    }, [isModalOpen, onModalClose])
    const handleSubmit = (e) => {
        e.preventDefault();

        const username = e.target.elements.username.value;
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;

        const users = JSON.parse(localStorage.getItem("users")) || []
        localStorage.setItem("users", JSON.stringify([...users, {username, email, password}]))

        const currentUser = {username, email}
        localStorage.setItem("currentUser", JSON.stringify(currentUser))

        e.target.reset();
        setUser(currentUser);
        onModalClose();
    }
    return(
        <Overlay $isModal={isModalOpen} onClick={onModalClose}>
            <Modal $isModal={isModalOpen} onClick={(e) => e.stopPropagation()}>
                <Title>Sign up</Title>
                <Form onSubmit={handleSubmit}>
                    <Label>
                        Username
                        <Input name="username" placeholder="Username" autoComplete="new-password" required/>
                    </Label>
                    <Label>
                        E-Mail
                        <Input name="email" type="email" placeholder="E-Mail" autoComplete="new-password" required/>
                    </Label>
                    <Label>
                        Password
                        <Input name="password" type="password" placeholder="Password" autoComplete="new-password" required/>
                    </Label>
                    <SubmitBtn>Sign up</SubmitBtn>
                </Form>
                <P>Already have an account? <a href="#">Log In</a></P>
            </Modal>
        </Overlay>
    )
}