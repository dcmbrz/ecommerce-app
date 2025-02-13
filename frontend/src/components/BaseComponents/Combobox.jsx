import * as React from "react";
import { Check, ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

export function Combobox({ items, itemsName, onSelect }) {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState("");
    const [searchTerm, setSearchTerm] = React.useState("");

    const filteredItems = searchTerm
        ? items.filter((item) =>
            item.text.toLowerCase().includes(searchTerm.toLowerCase())
        )
        : items.slice(0, 100);

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="justify-between truncate">
                    {value
                        ? items.find((item) => item.text === value)?.text
                        : `Select ${itemsName}...`}
                    <ChevronDown className="opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0" align="start" side="bottom" sideOffset={4}>
                <Command>
                    <CommandInput
                        placeholder={`Search ${itemsName}...`}
                        className="h-10"
                        value={searchTerm}
                        onValueChange={setSearchTerm}
                    />
                    <CommandList>
                        <CommandEmpty>No {itemsName} found.</CommandEmpty>
                        <CommandGroup>
                            {filteredItems.map((item) => (
                                <CommandItem
                                    key={item.value}
                                    value={item.text}
                                    onSelect={(currentValue) => {
                                        const selectedItem = items.find(item => item.text === currentValue);
                                        setValue(selectedItem?.text || "");
                                        setOpen(false);
                                        if (onSelect) onSelect(selectedItem); // Pass selected item to parent
                                    }}
                                >
                                    {item.text}
                                    <Check
                                        className={cn(
                                            "ml-auto",
                                            value === item.text ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}