import SearchableLayout from "@/components/searchable-layout";
import { ReactNode } from "react";
// import movies from "@/mock/dummy.json";
import MovieItem from "@/components/movie-item";
import style from "./index.module.css";
import fetchMovies from "@/lib/fetch-movies";
import { InferGetServerSidePropsType, InferGetStaticPropsType } from "next";
import fetchRandomMovies from "@/lib/fetch-random-movies";

// export const getServerSideProps = async () => {
// const allMovies = await fetchMovies();
// const recoMovies = await fetchRandomMovies();

export const getStaticProps = async () => {
  const [allMovies, recoMovies] = await Promise.all([
    fetchMovies(),
    fetchRandomMovies(),
  ]);
  return {
    props: {
      allMovies,
      recoMovies,
    },
  };
};

export default function Home({
  allMovies,
  recoMovies,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 가장 추천하는 영화</h3>
        <div className={style.recoMovie}>
          {recoMovies.map((movie) => {
            return <MovieItem key={movie.id} {...movie} />;
          })}
        </div>
      </section>
      <section>
        <h3>등록된 모든 영화</h3>
        <div className={style.allMovie}>
          {allMovies.map((movie) => {
            return <MovieItem key={movie.id} {...movie} />;
          })}
        </div>
      </section>
    </div>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
