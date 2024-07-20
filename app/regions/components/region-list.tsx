import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Region } from "../data/regions";

interface RegionListProps {
  regions: Region[];
}

export const RegionList: React.FC<RegionListProps> = ({ regions }) => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {regions.map((region) => (
        <Card key={region.name} className="w-full">
          <CardHeader>
            <CardTitle>{region.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
              {region.areas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
