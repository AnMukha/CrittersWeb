using Microsoft.EntityFrameworkCore.Migrations;

namespace CrittersWeb.Migrations
{
    public partial class Articles : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "slot",
                table: "SandBoxSaves",
                newName: "Slot");

            migrationBuilder.RenameColumn(
                name: "name",
                table: "SandBoxSaves",
                newName: "Name");

            migrationBuilder.RenameColumn(
                name: "data",
                table: "SandBoxSaves",
                newName: "Data");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Slot",
                table: "SandBoxSaves",
                newName: "slot");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "SandBoxSaves",
                newName: "name");

            migrationBuilder.RenameColumn(
                name: "Data",
                table: "SandBoxSaves",
                newName: "data");
        }
    }
}
