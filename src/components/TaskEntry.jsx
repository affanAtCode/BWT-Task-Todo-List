import React, { useState } from 'react';

const TaskEntry = ({ tasks, setTasks }) => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name.replace(/\s{2,}/g, ' ').trim();
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setInputs(inputs.status = true)
    console.log(inputs);
    setTasks(prev => [...prev, inputs]);
    setInputs({});
    // console.log(tasks);
  }

  return (
    <div className='w-full lg:w-1/3 flex justify-center items-center px-4 lg:px-0'>
      <div className="backdrop-blur-sm bg-[#0000002f] lg:bg-[#ffffff21] p-4 rounded-lg w-full lg:w-3/4">
        <h2 className='text-slate-100 font-bold text-xl text-center'>Add tasks</h2>
        <hr className='my-2 border-0 h-px bg-slate-300' />
        <form onSubmit={handleSubmit} className='flex flex-col gap-4' autoComplete='disabled'>
          <fieldset className='flex flex-col'>
            <span className='text-slate-100 font-semibold'>Title</span>
            <input type="text" name='title'
              value={inputs.title || ""} onChange={handleChange}
              placeholder='Enter a title'
              autoComplete='disabled'
              className='w-full px-2 py-1 rounded-md'
              required
            />
          </fieldset>
          <fieldset className='flex flex-col'>
            <span className='text-slate-100 font-semibold'>Description</span>
            <textarea type='text' name='desc'
              value={inputs.desc || ""} onChange={handleChange}
              placeholder='Enter Task description'
              className='w-full p-2 h-36 resize-none rounded-md'
              autoComplete='disabled'
            >
            </textarea>
          </fieldset>
          <button type="submit" className='bg-slate-400 font-semibold rounded-md py-2'>Add to list</button>
        </form>
      </div>
    </div>
  )
}

export default TaskEntry