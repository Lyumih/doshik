namespace $.$$ {
	export class $doshik_client extends $.$doshik_client {

		change_zen_mod() {
			this.zen(!this.zen())
      $mol_state_local.value('zen', this.zen())
		}

    zen(next?: boolean) {
			return $mol_state_local.value( this.state_key( 'zen' ) , next ) || false
    }

		sub(): readonly any[] {
			return [this.zen() ? this.Zen() : this.Full()]
		}

	}
}
