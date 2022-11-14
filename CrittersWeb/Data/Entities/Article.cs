using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CrittersWeb.Data.Entities
{
    public class Article
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Content { get; set; }
        public string CellsData { get; set; }
        public DateTimeOffset CreationDate { get; set; }
        public DateTimeOffset LastEditionDate { get; set; }
        public DateTimeOffset ApprovalDate { get; set; }
        public ArticleStatus Status { get; set; }
        public GameUser Author { get; set; }
        public Cell[] GetCells()
        {
            return CellsDataInDBSerializer.DeserializeCells(CellsData);
        }
        public void SetCells(Cell[] cells)
        {
            CellsData = CellsDataInDBSerializer.SerializeCells(cells);
        }

    }

    public enum ArticleStatus
    {
        // draft -> waiting for moderation -> regected (==draft) -> wfm -> approved -> archived
        Draft = 1,
        AwaitingApproval = 2,
        Regected = 3,
        Approved = 4,
        Archival = 5
    }

}
