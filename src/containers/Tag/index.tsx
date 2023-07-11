import Footer from '../../components/Footer'
import Header from '../../components/Header'
import MainBoard from './components/Main'
import MergeBoard from './components/Merge'
import SplitBoard from './components/Split'
import { tags } from '@mock/data'
const TagMng = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen pt-20">
        <section>
          <div className="py-6 sm:px-6 lg:px-8 flex flex-col sm:flex-row">
            <div className="basis-1/3 p-2">
              <MainBoard allTags={tags} />
            </div>

            <div className="basis-2/3 px-2 flex flex-col lg:flex-row">
              <div className="lg:basis-1/2 p-2">
                <MergeBoard />
              </div>
              <div className="lg:basis-1/2 p-2">
                <SplitBoard />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default TagMng
