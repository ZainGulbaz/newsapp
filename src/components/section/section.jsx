import React from 'react'
import NewsCard from '../card/newscard';
import { getEverythingBasedOnFilter, getTopHeadlines } from '../../apis/api';
import { ApiSourceEnums } from '../../utils/constants';
import { useSelector } from 'react-redux';


const Section = () => {

  const [articles, setArticles] = React.useState([]);


  const filter = useSelector(store => store?.filterReducer?.payload);

  React.useEffect(() => {
    fetchTopHeadlines();
  }, []);

  React.useEffect(() => {
    console.log(filter);
    if (filter?.from) {
      fetchEverythingBasedOnFilter(filter);
    }
    else if(filter?.refresh==true)
    {
      fetchTopHeadlines();
    }
    else if(filter?.category){
      fetchTopHeadlines(filter?.category);
    }
  }, [filter]);

  const fetchTopHeadlines = async (category="") => {
    try {
      setArticles([]);
      const res = await getTopHeadlines({ source: ApiSourceEnums.newsApi,category});
      setArticles(res?.articles || []);

    }
    catch (err) {
      console.log("Error in fetching top headlines", err?.message);
      console.log(err);
    }

  }


  const fetchEverythingBasedOnFilter = async (payload) => {
    try {
      setArticles([]);
      const res = await getEverythingBasedOnFilter({ source: ApiSourceEnums.newsApi, payload });
      setArticles(res?.articles || []);
    }
    catch (err) {
      console.log("Error in fetching top headlines", err?.message);
    }

  }


  return (
    articles.length==0 ? <div className='flex justify-center items-center flex-col min-h-screen'>
      <div className='loader'></div>

    </div> : <div className='flex justify-around flex-col min-h-screen md:px-10 px-2' >

      <h4 className='text-xl font-bold text-primary mt-6 mb-6'>Top Headlines</h4>

      <div className='grid md:grid-cols-3 grid-cols-1 gap-1'>

        {
          articles?.map((article, index) => (article?.urlToImage && article?.title && article?.description) && <NewsCard title={article?.title} source={article?.source?.name} description={article?.description} image={article?.urlToImage} url={article.url} key={index} />)
        }

      </div>



    </div>

  )
}

export default Section