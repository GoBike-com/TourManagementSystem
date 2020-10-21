import fetch from 'cross-fetch';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function Asynchronous() {
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState([]);
    const loading = open && options.length === 0;
    const [searchText, setSearchText] = React.useState("");

    React.useEffect(() => {
        let active = true;

        (async () => {
            const targetUrl = "http://localhost:7070/place/search/";
            fetch(targetUrl + searchText, {
                    method:'get',
                    headers: {Accept: 'application/json'},
                })
                .then((response) => response.json())
                .then((data) => {
                    const results = String(data).split(",");
                    if (active) {
                        setOptions((results.length && searchText ? results : []));
                    }
                })
                .catch((error) => {
                    console.log(error);
                    setOptions([]);
                })
        })();

        return () => {
            active = false;
        };
    }, [searchText]);

    React.useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);

    return (
        <Autocomplete
            clearOnBlur={false}
            id="searchbar"
            style={{ width: 300 }}
            open={open}
            onOpen={() => {
                setOpen(true);
            }}
            onClose={() => {
                setOpen(false);
            }}
            onChange={(event, value, reason ) => {
                if (value !== null) {
                    //they hit enter or they clicked on auto fill. Go to selected response.
                    window.location.href = `http://localhost:3000/traveller/success`;
                }
            }}
            onInputChange={(event, value, reason) => {
                setSearchText(value);
                console.log(searchText);
            }}
            getOptionSelected={(option, value) => option === value}
            getOptionLabel={(option) => option}
            options={options}
            loading={loading}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Search..."
                    variant="outlined"
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <React.Fragment>
                                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                {params.InputProps.endAdornment}
                            </React.Fragment>
                        ),
                    }}
                />
            )}
        />
    );
}