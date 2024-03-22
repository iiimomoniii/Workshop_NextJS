"use client";
import { Box, Button, Card, CardContent, CardMedia, InputAdornment, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import * as Icons from '@mui/icons-material';
import { Controller, useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useSelector } from 'react-redux';
import { userSelector, add } from '@/store/slices/userSlice';
import { useAppDispatch } from '@/store/store';
interface User {
  username: string;
  password: string;
}

type Props = {}

export default function Register({ }: Props) {
  const router = useRouter();
  const reducer = useSelector(userSelector);
  const dispatch = useAppDispatch();

  const initialValue: User = { username: "", password: "" }; //default value = ""
  //validate usename and password by yup lib
  
  const formValidateSchema = Yup.object().shape({
    username : Yup.string().required("Email is Required").trim(),
    password : Yup.string().required("Password is Required").trim()
  })

  const { control, handleSubmit , formState: {errors} } = useForm<User>({
    defaultValues: initialValue,
    //bind formValidateSchema to resolver
    resolver: yupResolver(formValidateSchema)
  });

  const showForm = () => {
    return <form onSubmit={handleSubmit((value: User) => {
      alert(JSON.stringify(value))
    })}>
      {/* Username */}
      <Controller
        name="username"
        control={control}
        render={({ field }) => (
          <TextField
            // onChange={field.onChange} value={field.value} = {...field}
            {...field}
            // add condition check when errors of usename has message will show error message 
            error={Boolean(errors.username?.message)}
            // errors message from formValidateSchema 
            helperText={errors.username?.message?.toString()}
            variant="outlined"
            margin="normal"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Icons.Email />
                </InputAdornment>
              ),
            }}
            label="Username"
            autoComplete="email"
            autoFocus
          />
        )}
      />

      {/* Password */}
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            error={Boolean(errors.password?.message)}
            helperText={errors.password?.message?.toString()}
            variant="outlined"
            margin="normal"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Icons.Password />
                </InputAdornment>
              ),
            }}
            label="Password"
            autoComplete="password"
            autoFocus
          />
        )}
      />
      <Button
        className="mt-8"
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
      >
        Create
      </Button>

      <Button
        className="mt-4"
        onClick={() => {
          dispatch(add());
          router.push("/login");
        }}
        type="button"
        fullWidth
        variant="outlined"
      >
        Cancel
      </Button>
    </form>
  }

  return (
    <Box className="flex justify-center items-center">
      <Card elevation={7} className="max-w-[345px] mt-[100px]">

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Register ({reducer.count})
          </Typography>
          {showForm()}
        </CardContent>
      </Card>
      <style jsx global>
        {`
          body {
            min-height: 100vh;
            position: relative;
            margin: 0;
            background-size: cover;
            background-image: url("/static/img/register.jpg");
            text-align: center;
          }
        `}
      </style>
    </Box>
  )
}

