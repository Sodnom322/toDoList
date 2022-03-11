import { request } from "../../../common/http"
import { Film } from "../../../interfaces"




const getFims = async () => {
    try {
    const data: Film[] = await request('https://ghibliapi.herokuapp.com/films','GET')
    return data
    } catch (e) {
        throw e
    }
}
export { getFims }