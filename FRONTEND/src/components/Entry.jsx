export const Entry = ({ news }) => {
    return <article>
        <p>
            {news.new_title}
        </p>
        {enews.new_pic ? <img src={`http://localhost:3000/uploads/${news.new_pic}`} alt="Entrada" /> : null}
        <p> {news.new_entrance}</p>
        <p> {news.new_text}</p>
        <p> {news.new_theme}</p>
        <p> By {news.users_user_id} on {new Date(news.created_at).toLocaleDateString()}</p>
    </article>
}