import { useForm } from 'react-hook-form'
import React from "react";
import { AddUserScore } from '../userScores.interface';
import { Button, Input } from '@northlight/ui';

interface Props {
  onSubmit: (e: AddUserScore) => void;
}

export default function AddUserAndScore({ onSubmit }: Props) {

  const { register, handleSubmit, watch, formState: { errors }, } = useForm<AddUserScore>()

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name</label>
          <Input variant="outline" placeholder='Name' {...register("name", { required: true })} />
          {errors.name && <span>Required field</span>}
        </div>
        <div>
          <label htmlFor="score">Score</label>
          <Input variant="outline" placeholder='Score' {...register("score")} />
        </div>
        <Button variant="success" type="submit">Save</Button>
      </form>
    </>
  );
}
