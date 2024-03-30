import React from 'react'
import NewsCard from '../card/newscard';
import { getEverythingBasedOnFilter, getTopHeadlines } from '../../apis/api';
import { ApiSourceEnums } from '../../utils/constants';
import { useSelector } from 'react-redux';
import Strings from '../../utils/strings';


const Section = ({ apiSource }) => {

  const [articles, setArticles] = React.useState([]);


  const filter = useSelector(store => store?.filterReducer?.payload);

  React.useEffect(() => {
    fetchTopHeadlines();
  }, []);

  React.useEffect(() => {
    fetchTopHeadlines();
  }, [apiSource]);



  React.useEffect(() => {
    if (filter?.from) {
      fetchEverythingBasedOnFilter(filter);
    }
    else if (filter?.refresh == true) {
      fetchTopHeadlines();
    }
    else if (filter?.category) {
      fetchTopHeadlines(filter?.category);
    }
  }, [filter]);

  const fetchTopHeadlines = async (category = "") => {
    try {
      setArticles([]);
      const res = await getTopHeadlines({ source: apiSource, category });
      if (! (res?.articles?.length)) {
        setArticles(Strings.no_articles);
      }
      else setArticles(res?.articles || []);

    }
    catch (err) {
      console.log("Error in fetching top headlines", err?.message);
      console.log(err);
    }

  }


  const fetchEverythingBasedOnFilter = async (payload) => {
    try {
      setArticles([]);
      const res = await getEverythingBasedOnFilter({ source: apiSource, payload });

      if (!res.articles?.length) {
        setArticles(Strings.no_articles);
      }
      else setArticles(res?.articles || []);
    }
    catch (err) {
      console.log("Error in fetching top headlines", err?.message);
    }

  }


  return (
    articles.length == 0 ? <div className='flex justify-center items-center flex-col min-h-screen'>
      <div className='loader'></div>

    </div> : (typeof articles == "string") ?  <div className='mx-auto font-bold p-4'>{articles}</div> : <div className='flex justify-around flex-col min-h-screen md:px-10 px-2' >

      <h4 className='text-xl font-bold text-primary mt-6 mb-6'>Top Stories</h4>

      <div className='grid md:grid-cols-3 grid-cols-1 gap-1'>

        {
          articles?.map((article, index) => (article?.urlToImage && article?.title && article?.description) && <NewsCard title={article?.title} source={article?.source?.name} description={article?.description} image={article?.urlToImage} url={article.url} key={index} />)
        }

      </div>

    </div>

  )
}

export default Section