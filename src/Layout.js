// import m from "mithril"

const Layout = {
	view: function(vnode) {
		return m("main.layout", [
			m("nav.menu", [
				m(m.route.Link, {href: "/list"}, "Entry List"),
				m(m.route.Link, {href: "/board"}, "Tic Tac Toe"),
				m(m.route.Link, {href: "/bookshop"}, "Book Shop")
			]),
			m("section", vnode.children)
		])
	}
}

// export default Layout
