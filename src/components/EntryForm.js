window.EntryForm = function () {
	let entry = Entry.vm()
	let discount = 0
	

	function add () {
		entry.volunteers.push( Entry.volunteerVM() )
	}

	function remove (idx) {
		entry.volunteers.splice(idx, 1)
	}

	function submit () {
		Entry.create(entry)	
		m.route.set('/')
	}

	return {
		/*
		view() {
			return m('h1', "EntryForm")
		}
		*/

		view() {
			var showRemove = (entry.volunteers.length >= 2)

			return m('.entry-form', [

			m('h1', "New Entry"),
			m('h3', "Please enter each volunteer's contact information:"),

			/* entry.volunteers.map( function(volunteer, idx) {
				return m('fieldset', [
					m('legend', "Volunteer #" + (idx + 1)),
					m('label', "Name:"),
					m('input[type=text]', {
						value: volunteer.name,
						onchange(e) {
							volunteer.name = e.target.value
						}
					}),
					m('br'),
					m('label', "Email:"),
					m('input[type=text]', { value: volunteer.email }),

					showRemove && 
						m('button', { onclick(){ remove(idx)}}, 'remove')
				])
			}),

			m('button', { onclick: add }, 'Add another volunteer'), */

			m(Volunteers, {
				add: add,
				remove: remove,
				volunteers: entry.volunteers
			}),

			m(Total, {
				count: entry.volunteers.length,
				discount: discount
			}),

			m(Coupon, {
				onSuccess(newDiscount) {
					discount = newDiscount
				}
			}),

			m('br'),
			m('button', { onclick: submit }, 'Submit'),
			])

		}
	}
}
