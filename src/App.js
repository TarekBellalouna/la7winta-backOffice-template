// routes
import Router from './routes';
// theme
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';
// components
import ScrollToTop from './components/ScrollToTop';
import { BaseOptionChartStyle } from './components/charts/BaseOptionChart';
//redux 
// ----------------------------------------------------------------------
import { fetchProducts } from "./redux/slices/productsSlice";
import { useDispatch } from "react-redux";
import { useEffect } from 'react';
import { fetchBrands } from './redux/slices/brandsSlice';
import { fetchCategories } from './redux/slices/categorySlice';

//------------------------
export default function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
  dispatch(fetchProducts())
  dispatch(fetchBrands())
  dispatch(fetchCategories())
  
  },[])
  
  return (
    <ThemeConfig>
      <ScrollToTop />
      <GlobalStyles />
      <BaseOptionChartStyle />
      <Router />
    </ThemeConfig>
  );
}
