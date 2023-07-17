import { Checkbox, IconButton } from '@mui/material'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Image from 'next/image'
import React from 'react'
import { myTheme } from '../theme'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const LoginPage = () => {
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    return (
        <Stack
            sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                p: '48px',
                width: '720px',
                height: '672px',
                justifyContent: 'center',
                alignItems: 'center',
                bgcolor: 'white',
                borderRadius: '32px',
                gap: '48px',
            }}
        // spacing={4.5}
        >
            {/* logo */}
            <Image
                src="/assets/icons/logo.svg"
                alt="logo"
                width={127}
                height={72}
            />

            {/* email input */}
            <Stack spacing={0.5} sx={{ width: 400 }}>
                {/* label */}
                <Stack direction="row" spacing={0.5} alignItems="center">
                    <Typography
                        sx={{
                            fontSize: '14px',
                            lineHeight: '20px',
                            fontWeight: 600,
                        }}
                    >
                        Email
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: '20px',
                            // lineHeight: '20px',
                            // fontWeight: 600,
                            color: 'red',
                        }}
                    >
                        *
                    </Typography>
                </Stack>
                {/* end label */}

                {/* input */}
                <TextField
                    sx={{
                        width: '100%',
                        height: '40px',
                        borderRadius: '8px',
                        border: `1px solid netral[300]`,
                        '& .MuiOutlinedInput-root': {
                            fontSize: '14px',
                            lineHeight: '20px',
                            height: '100%',
                            '& fieldset': {
                                borderColor: 'netral[300]',
                            },
                            '&:hover fieldset': {
                                borderColor: '#E0E0E0',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#E0E0E0',
                            },
                        },
                    }}
                    variant="outlined"
                    placeholder="john@example.com"
                    InputProps={{
                        startAdornment: (
                            <Image
                                src="/assets/icons/login/email.svg"
                                alt="email"
                                width={24}
                                height={24}
                                unoptimized
                                style={{ marginRight: '16px' }}
                            />
                        ),
                    }}
                />
            </Stack>
            {/* end email input */}

            {/* password input */}
            <Stack spacing={0.5} sx={{ width: 400 }}>
                {/* label */}
                <Stack direction="row" spacing={0.5} alignItems="center">
                    <Typography
                        sx={{
                            fontSize: '14px',
                            lineHeight: '20px',
                            fontWeight: 600,
                        }}
                    >
                        Password
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: '20px',
                            // lineHeight: '20px',
                            // fontWeight: 600,
                            color: 'red',
                        }}
                    >
                        *
                    </Typography>
                </Stack>
                {/* end label */}

                {/* input */}
                <TextField
                    sx={{
                        width: '100%',
                        height: '40px',
                        borderRadius: '8px',
                        border: `1px solid netral[300]`,
                        '& .MuiOutlinedInput-root': {
                            fontSize: '14px',
                            lineHeight: '20px',
                            height: '100%',
                            '& fieldset': {
                                borderColor: 'netral[300]',
                            },
                            '&:hover fieldset': {
                                borderColor: '#E0E0E0',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#E0E0E0',
                            },
                        },
                    }}
                    variant="outlined"
                    type='password'
                    placeholder="********"
                    InputProps={{
                        startAdornment: (
                            <Image
                                src="/assets/icons/login/key.svg"
                                alt="password"
                                width={24}
                                height={24}
                                unoptimized
                                style={{ marginRight: '16px' }}
                            />
                        ),
                    }}
                />
            </Stack>
            {/* end password input */}

            {/* remember me */}
            <Stack direction="row" spacing={0.5} alignItems="center" justifyContent={'flex-start'} width={400}>
                <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    size='medium'
                    sx={{
                        borderRadius: '10px',
                        width: '24px',
                        height: '24px',
                        '& .MuiSvgIcon-root': {
                            width: '24px',
                            height: '24px',
                        },
                    }}
                />
                <Typography
                    sx={{
                        fontSize: '14px',
                        lineHeight: '20px',
                        fontWeight: 400,
                        color: myTheme.text.light.active,
                        cursor: 'pointer',
                    }}
                    onClick={() => { setChecked(!checked) }}
                >
                    Remember me
                </Typography>
            </Stack>

            {/* action button */}
            <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                width={400}
                sx={{
                    p: '16px 8px'
                }}
            >
                {/* login button */}
                <Button
                    sx={{
                        width: 217,
                        height: 48,
                        borderRadius: '999px',
                        bgcolor: 'primary.main',
                        // textTransform: 'none',
                        fontSize: '14px',
                        lineHeight: '20px',
                        color: myTheme.text.dark.active,
                        '&:hover': {
                            bgcolor: 'primary.dark',
                            opacity: 0.8,
                        },
                    }}
                >
                    Log in
                    <NavigateNextIcon sx={{ marginLeft: '4px' }} />
                </Button>

                <Typography
                    sx={{
                        fontSize: '14px',
                        lineHeight: '20px',
                        fontWeight: 600,
                        color: myTheme.text.light.inactive,
                        cursor: 'pointer',
                    }}
                >
                    OR
                </Typography>

                {/* google button */}
                <IconButton
                    sx={{
                        width: 48,
                        height: 48,
                        borderRadius: '999px',
                        bgcolor: myTheme.color.primary[50],
                        color: myTheme.text.light.inactive,
                    }}
                >
                    <Image
                        src="/assets/icons/login/google.svg"
                        alt="google"
                        width={28}
                        height={28}
                        unoptimized
                    />
                </IconButton>
                {/* end google button */}

                {/* github button */}
                <IconButton
                    sx={{
                        width: 48,
                        height: 48,
                        borderRadius: '999px',
                        bgcolor: myTheme.color.primary[50],
                        color: myTheme.text.light.inactive,
                    }}
                >
                    <Image
                        src="/assets/icons/login/github.svg"
                        alt="github"
                        width={28}
                        height={28}
                        unoptimized
                    />
                </IconButton>
                {/* end github button */}
            </Stack>

            {/* sign up */}
            <Stack direction="row" spacing={0.5} alignItems="center" justifyContent={'center'} width={400}>
                <Typography
                    sx={{
                        fontSize: '14px',
                        lineHeight: '20px',
                        fontWeight: 400,
                        color: myTheme.text.light.active,
                    }}
                >
                    {"New here? Create an account."}
                </Typography>
                <Typography
                    component={Button}
                    sx={{
                        textTransform: 'none',
                        fontSize: '14px',
                        lineHeight: '20px',
                        fontWeight: 400,
                        color: 'primary.main',
                        cursor: 'pointer',
                    }}
                >
                    Sign up
                </Typography>
            </Stack>
            {/* end sign up */}
        </Stack>
    )
}

export default LoginPage