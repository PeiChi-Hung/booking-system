import { Label } from "./ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"

export default function Options() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="grid gap-2">
        <Label htmlFor="granularity">Granularity</Label>
        <Select>
          <SelectTrigger id="granularity">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="mth">Month</SelectItem>
            <SelectItem value="yrs">Year</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="filter">Filter</Label>
        <Select>
          <SelectTrigger id="filter">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="mth">Month</SelectItem>
            <SelectItem value="yrs">Year</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
