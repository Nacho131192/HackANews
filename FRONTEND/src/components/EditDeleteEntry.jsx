import { useContext, useState } from 'react';
import { LoginContext } from '../context/LoginContext';
import { deleteEntryService } from '../services/entriesServices';
import { Navigate, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './EditDeleteEntry.css';

import swal from 'sweetalert';
import { getToken } from '../utilities/getToken';
export default function EditDeleteEntry({ results }) {
    const [error, setError] = useState('');
    const token = getToken();
    const navigate = useNavigate();
    const idNew = results[0].id;

    async function handleDelete(id, token) {
        try {
            await deleteEntryService(id, token);
            navigate('/mynews');
        } catch (error) {
            setError(error.message);
        }
    }
    return (
        <section className="btn_edit_delete">
            <Button
                className="btn_full_entry"
                variant="secondary"
                onClick={() => {
                    navigate(`/entries/update/${idNew}`);
                }}
            >
                EDITAR
            </Button>
            <Button
                className="btn_full_entry"
                variant="secondary"
                onClick={() => {
                    if (
                        swal({
                            title: 'Are you sure?',
                            text: 'Are you sure that you want to delete this entry?',
                            icon: 'warning',
                            dangerMode: true,
                        })
                    )
                        handleDelete(idNew, token);
                }}
            >
                ELIMINAR
            </Button>
            {error ? <p>{error}</p> : null}
        </section>
    );
}
