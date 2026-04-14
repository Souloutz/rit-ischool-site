"use client";

import { type Employment } from "@/lib/definitions";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { TableProperties } from "lucide-react";
import { MotionDiv } from "@/components/Motion";

export default function EmploymentTable({
  data,
}: {
  data: Employment;
}) {
  const columns: GridColDef[] = [
    { field: "employer", headerName: "Employer", flex: 1, minWidth: 160 },
    { field: "degree", headerName: "Degree", flex: 1, width: 60 },
    { field: "city", headerName: "City", flex: 1, width: 60 },
    { field: "title", headerName: "Title", flex: 2, minWidth: 180 },
    { field: "startDate", headerName: "Start Date", width: 120 },
  ];

  const rows = data.employmentTable.professionalEmploymentInformation.map((item, index) => ({
    id: index,
    ...item,
  }));

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-card border border-border p-10 shadow-md"
    >
      <div className="flex items-center gap-4 mb-8">
        <TableProperties className="w-8 h-8 text-primary" />
        <h3 className="text-3xl font-bold text-foreground tracking-tight">{data.employmentTable.title}</h3>
      </div>
      <div className="w-full" style={{ height: 600 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[10, 25, 50, 100]}
          disableRowSelectionOnClick
          sx={{
            border: "none",
            backgroundColor: "var(--card)", 
            color: "var(--foreground)",

            // Headers
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "var(--muted)", 
              color: "var(--foreground)",
              borderBottom: "1px solid var(--border)",
            },
            "& .MuiDataGrid-columnHeader": {
              backgroundColor: "transparent",
              color: "var(--foreground)",
            },
            "& .MuiDataGrid-columnHeaderTitle": {
              fontWeight: 700,
              textTransform: "uppercase",
              fontSize: "0.9rem",
              letterSpacing: "0.5px",
            },

            // Cells & Rows
            "& .MuiDataGrid-cell": {
              borderColor: "var(--border)",
              color: "var(--foreground)",
            },
            "& .MuiDataGrid-row": {
              backgroundColor: "transparent",
              "&:hover": {
                backgroundColor: "var(--accent) !important", 
              },
            },

            // Footer & Pagination
            "& .MuiDataGrid-footerContainer": {
              borderTop: "1px solid var(--border)",
              color: "var(--muted-foreground)",
            },
            "& .MuiTablePagination-root": {
              color: "var(--muted-foreground)",
            },
            "& .MuiTablePagination-selectIcon": {
              color: "var(--muted-foreground)",
            },

            "& .MuiDataGrid-sortIcon": {
              color: "var(--primary)",
            },
            "& .MuiDataGrid-menuIcon": {
              color: "var(--muted-foreground)",
            },
            "& ::-webkit-scrollbar": {
              width: "8px",
              height: "8px",
            },
            "& ::-webkit-scrollbar-thumb": {
              backgroundColor: "var(--border)",
              borderRadius: "4px",
            },
          }}
        />
      </div>
    </MotionDiv>
  );
}