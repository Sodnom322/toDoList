import { createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import { getFims } from '../../connectors/films/getfims'
import { Film } from '../../interfaces'

export interface FilmState {
  data: Film[],
  favoritesFilms: Film[]
}

const initialState: FilmState = {
  data: [] as Film[],
  favoritesFilms: [] as Film[]
}

export const getFilmsAction = createAsyncThunk(
    'getFims',
    async (_,{dispatch, getState}) => {
        try{
        const data = await getFims()
        dispatch(setFilms(data))
        }catch(e){
            throw e
        }
    }
)



export const filmSlice = createSlice({
  name: 'film',
  initialState,
  reducers: {
   setFilms: (state,action: PayloadAction<Film[]>) => {
       state.data = action.payload
   },
   setFavoriteFims: (state,action: PayloadAction<Film>) => {
     if(!state.favoritesFilms.find((element,index,array)=>{
      return element.id === action.payload.id
     })){
       state.favoritesFilms.push(action.payload)
     }else{
      state.favoritesFilms = state.favoritesFilms.filter((element)=>{
        return element.id !== action.payload.id
       })
     }
    
  },}
})
export const {setFilms,setFavoriteFims} = filmSlice.actions

export default filmSlice.reducer