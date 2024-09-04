import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import CardaoIphoneSelect from './CardaoIphoneSelect';
import TurnoSelect from './TurnoSelect';
import ProgramaSelect from './ProgramaSelect';
import CinegrafistaPicker from './CinegrafistaPicker';
import ReporterPicker from './ReporterPicker';
import FileUpload from './FileUpload';

const DecupagemForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [selectedTurno, setSelectedTurno] = useState(null);
  const [selectedPrograma, setSelectedPrograma] = useState(null);

  const onSubmit = (data) => {
    // Handle form submission
    console.log(data);
    // Here you would typically send the data to your backend API
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Decupagem</h1>
      <p>Preencha os dados abaixo para decupagem dos arquivos.</p>

      <CardaoIphoneSelect register={register} />
      
      <TurnoSelect 
        selectedTurno={selectedTurno} 
        setSelectedTurno={setSelectedTurno} 
      />
      
      <ProgramaSelect 
        selectedPrograma={selectedPrograma}
        setSelectedPrograma={setSelectedPrograma}
      />
      
      <CinegrafistaPicker register={register} />
      
      <ReporterPicker register={register} />
      
      <div>
        <label htmlFor="retranca">Retranca*</label>
        <input 
          id="retranca"
          {...register("retranca", { required: true })}
        />
        {errors.retranca && <span>Este campo é obrigatório</span>}
      </div>
      
      <div>
        <label htmlFor="observacao">Observação</label>
        <textarea 
          id="observacao"
          {...register("observacao")}
        />
      </div>
      
      <FileUpload register={register} />
      
      <div>
        <button type="submit">Enviar respostas</button>
        <button type="button">Salvar respostas</button>
      </div>
    </form>
  );
};

export default DecupagemForm;