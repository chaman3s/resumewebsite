import List from "../List";

export default function Header({menuList}) {
    return(
        <header>
            <nav>
               <List items={menuList} style={"horizontal-list text-center nav-menu"} />
            </nav>
            <div>
                <div class="text-center">
                    <h1>Chaman Aggarwal</h1>
                </div>
            </div>

        </header>
    )
};
