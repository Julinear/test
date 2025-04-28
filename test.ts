
 static mergeStyle() {
        return `<style>
        table,
        td {
          border: 1px solid rgb(218, 214, 214);
          border-collapse: collapse;
        }
      
        table td {
          padding: 10px 30px;
        }
      
        p>table>tbody>tr>td:first-child {
          background-color: rgb(230, 229, 229);
          font-weight: 600;
        }
      </style>`;
    }
 
    static assembleTask(meeting: Meeting, task?: Task) {
        let p = document.createElement('p');
        p.innerHTML = meeting.body;
        let tables = p.querySelectorAll('table');
        let table = document.createElement('table');
        for (let idx = 0; idx < tables.length; idx++) {
            if (tables[idx].innerHTML.includes('主题') || tables[idx].innerHTML.includes('Subject')) {
                table = tables[idx];
                break;
            }
        }
    }
