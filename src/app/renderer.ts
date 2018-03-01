import { Injectable } from '@angular/core';

@Injectable()
export class Renderer {
	constructor	() {

	}

	Render(data:any){
		let html = "";
		switch (data.relation) {
			case "input":	
				html = `
					<div class="input-field col s2">
			          <input id="first_name" type="`+ data.type +`" class="validate" value="`+data.value+`">
			          <label for="first_name" class="active">Name</label>
			        </div>
				`;
				break;
			case "table":	
				let cols = '<tr><th><label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-data-table__select mdl-js-ripple-effect--ignore-events is-upgraded" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" class="mdl-checkbox__input"><span class="mdl-checkbox__focus-helper"></span><span class="mdl-checkbox__box-outline"><span class="mdl-checkbox__tick-outline"></span></span><span class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span class="mdl-ripple"></span></span></label></th>';

				for(let c in data.cols){
					cols += "<th class='mdl-data-table__cell--non-numeric'>" + data.cols[c] + "</th>"; 
				}
				cols += "</tr>";


				let rows = "";
				for(let tr in data.rows){
					rows+='<tr><td><label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-data-table__select mdl-js-ripple-effect--ignore-events is-upgraded" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" class="mdl-checkbox__input"><span class="mdl-checkbox__focus-helper"></span><span class="mdl-checkbox__box-outline"><span class="mdl-checkbox__tick-outline"></span></span><span class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span class="mdl-ripple"></span></span></label></td>';
					for(let td in data.rows[tr]){
						rows+= "<td class='mdl-data-table__cell--non-numeric'>" + data.rows[tr][td] + "</td>";
					}
					rows += "</tr>";
				}
				
				html = `

				<div class="mdl-cell mdl-cell--12-col-desktop mdl-cell--12-col-tablet mdl-cell--4-col-phone ">
                    <table class="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp projects-table is-upgraded" data-upgraded=",MaterialDataTable">
                        <thead>`+cols+`</thead>
                        <tbody>`+rows+`</tbody>
                    </table>
                </div>
				`;
				break;
			default:
				break;
		}
		return html;
	}
}