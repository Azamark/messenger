import { TextField, Button } from '@mui/material'
import { useDispatch } from 'react-redux';
import { setUserData } from '../store/feature/user/userSlice';

export const Login = () => {

    const dispatch = useDispatch();

    const handlerLoginForm = (ev) => {
        ev.preventDefault();
        console.log(ev.target)
        //dispatch(setUserData({ ...ev.target.value }));
    }

    return (
        <>
            <form className='login_form' onSubmit={handlerLoginForm}>
                <h1>Форма регистрации:</h1>
                <TextField
                    placeholder="LOGIN"
                />
                <TextField
                    placeholder="PASSWORD"
                />
                <Button
                    type="submit"
                    variant="contained"
                >
                    Зарегистрироваться
                </Button>
            </form>


        </>
    )
}
