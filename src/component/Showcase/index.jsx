import { CardComponent } from "../CardComponent";
import { useShowcase } from "../../hooks/useShowcase";

export const Showcase = () => {
  const { isLoading, isError, showcase } = useShowcase();

  if (isLoading) return <>loading...</>;

  if (isError) return <>Sorry :( data is lost somewhere ^_^</>;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        gap: "1rem",
        margin: "1rem",
      }}
    >
      {showcase.map((el) => (
        <div class="row gy-5">
          <div class="col-12">
            <div class="row">
              <div class="col-8">
                <div class="h-25 row">
                  <div class="col-1">
                    <img src="./assets/avatar_default.png" alt="..." />
                  </div>
                  <div class="col">
                    <p>
                      <b>Author name</b> <small class="text-muted">in</small>
                      <b>Topics name</b>
                      <small class="text-muted">7th July</small>
                    </p>
                  </div>
                </div>
                <div class="h-25 row">
                  <h1 id="title">{el.title}</h1>
                </div>
                <div class="h-25 row">
                  <p>
                    You not only learn more Python by implementing what you
                    already know but, in the end, you can see how all your hard
                    work pays off. You not only learn more Python by
                    implementing what you already know but, in the end, you can
                    see how all your hard work pays off. You not only learn more
                    Python by implementing what you already know but, in the
                    end, you can see how all your hard work pays off. You not
                    only learn more Python by implementing what you already know
                    but, in the end, you can see how all your hard work pays
                    off.
                  </p>
                </div>

                <div class="h-25 row">
                  <div class="col-2">
                    <span>JavaScript</span>
                  </div>
                  <div class="col-8">
                    <p>
                      <small class="text-muted">12 min read</small>
                      <small class="text-muted">Selected for you</small>
                    </p>
                  </div>
                  <div class="col-2">
                    <img src="./assets/skeleton-rect.png" alt="..." />
                    <img src="./assets/skeleton-rect.png" alt="..." />
                    <img src="./assets/skeleton-rect.png" alt="..." />
                  </div>
                </div>
              </div>

              <div class="col">
                <img src="./assets/thread1.png" class="img-fluid" alt="..." />
              </div>
            </div>
            <hr />
          </div>
        </div>
      ))}
    </div>
  );
};
