namespace $.$$ {
	export class $doshik_client_steps extends $.$doshik_client_steps {
		
		add_today_steps() {
			if (this.add_doshik() > 0) this.doshik_value(this.doshik_value() + this.add_doshik())
		}

		all_doshik_label() {
			return `### Всего активных шагов: *${this.doshik_value()}*`
		}
		
	}
}
