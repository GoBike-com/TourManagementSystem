import fetch from 'cross-fetch';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function Asynchronous() {
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState([]);
    const loading = open && options.length === 0;
    let currentSearchText = "";

    React.useEffect(() => {
        let active = true;

        if (!loading) {
            return undefined;
        }

        (async () => {
            const response = fetch(`localhost:7070/place/search/${currentSearchText}`) //call to retrieve from search backend API
                .catch((error) => {
                    // alert(error);
                    console.log(error);
                });

            if (response.ok) {
                const searchResults = await response.data.json();
                if (active) {
                    setOptions(Object.keys(searchResults).map((key) => searchResults[key].item[0])); //might need to change depending on what gets returned
                }
            } else {
                console.log("Call to search api failed.");
            }
        })();

        return () => {
            active = false;
        };
    }, [loading]);

    React.useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);

    return (
        <Autocomplete
            freeSolo
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
                    window.location.href = `http://localhost:3000/traveller/success?${currentSearchText}`;
                }
            }}
            onInputChange={(event, value, reason) => {
                if (value !== null) {
                    currentSearchText = value;
                } else {
                    currentSearchText = "aaa";
                }
            }}
            getOptionSelected={(option, value) => option.name === value.name}
            getOptionLabel={(option) => option.name}
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