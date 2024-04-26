import { useState } from 'react';
import FlagList from './components/Sections/FlagListSection/FlagList';
import InputSection from './components/Sections/InputSection/InputSection';
import FilterSection from './components/Sections/FilterSection/FilterSection';
import Header from './components/Sections/HeaderSection/Header';
import Swal from 'sweetalert2';

import './App.css';

let state = {
  inputFields: { name: "", population: "", continent: "", capital: "", src: "" },

  flags: [
    {
      flag_info: {
        id: 1,
        name: "Afghanistan",
        population: 25500100,
        continent: "Asia",
        capital: "Kabul"
      },
      image: {
        src: "https://cdn.countryflags.com/thumbs/afghanistan/flag-square-250.png",
        name: "Afghanistan"
      }
    },
    {
      flag_info: {
        id: 2,
        name: "Albania",
        population: 2877797,
        continent: "Europe",
        capital: "Tirana"
      },
      image: {
        src: "https://cdn.countryflags.com/thumbs/albania/flag-square-250.png",
        name: "Albania"
      }
    },
    {
      flag_info: {
        id: 3,
        name: "Algeria",
        population: 43851043,
        continent: "Africa",
        capital: "Algiers"
      },
      image: {
        src: "https://cdn.countryflags.com/thumbs/algeria/flag-square-250.png",
        name: "Algeria"
      }
    },
    {
      flag_info: {
        id: 4,
        name: "Andorra",
        population: 78014,
        continent: "Europe",
        capital: "Andorra la Vella"
      },
      image: {
        src: "https://cdn.countryflags.com/thumbs/andorra/flag-square-250.png",
        name: "Andorra"
      }
    }
  ],

}

const App = () => {

  const [flags, setFlags] = useState(state.flags);
  const [nextId, setNextId] = useState(state.flags.length + 1);
  const [inputFields, setInputFields] = useState(state.flags[state.inputFields]);
  const [filter, setFilter] = useState(0);

  const addFlag = () => {
    if (inputFields.name === "" || inputFields.population === "" || inputFields.continent === "" || inputFields.capital === ""){
      Swal.fire(`Please fill in all fields 
      (Flag will be added automatically)`);
      return;
    }

    setNextId(nextId + 1);
    setFlags([...flags, {
      flag_info: {
        id: nextId,
        name: inputFields.name,
        population: inputFields.population,
        continent: inputFields.continent,
        capital: inputFields.capital,
      },
      image: {
        src: `https://cdn.countryflags.com/thumbs/${inputFields.name.toLowerCase()}/flag-square-250.png`,
        name: inputFields.name,
      }
    }])

  }

  const inputChange = (event) => {
    let updatedInputFields = { ...inputFields, [event.target.name]: event.target.value };
    setInputFields(updatedInputFields)
  }

  const deleteFlag = (id) => {
    setFlags(flags.filter(flag => flag.flag_info.id !== id))
  }

  return (
    <div className="App">
      <div className='wrapper'>
        <Header />
        <InputSection input_change={inputChange} add_flag={addFlag} input_fields={inputFields} />
        <FilterSection filter_change={(event) => { setFilter(event.target.value) }} />
        <FlagList filter={filter} flags={flags} delete_flag={deleteFlag} />
      </div>
    </div>
  );
}

export default App;
