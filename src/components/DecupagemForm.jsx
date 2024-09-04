import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const DecupagemForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post('http://localhost:5000/api/decupagem', data);
      alert('Decupagem enviada com sucesso!');
    } catch (error) {
      alert('Erro ao enviar decupagem');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Decupagem</h1>
      
      <div>
        <label htmlFor="cartaoIphone">Cartão/iPhone*</label>
        <select {...register("cartaoIphone", { required: true })}>
          <option value="iph01">iph 01</option>
          {/* Adicione outras opções */}
        </select>
      </div>

      {/* Adicione outros campos do formulário */}

      <button type="submit">Enviar respostas</button>
    </form>
  );
};

export default DecupagemForm;