"use client";

import React from 'react';
import {
    Button,
    Tree as AriaTree,
    TreeItem as AriaTreeItem,
    TreeItemContent as AriaTreeItemContent,
    TreeItemContentProps,
    TreeItemContentRenderProps,
    TreeItemProps as AriaTreeItemProps,
    TreeProps,
} from 'react-aria-components';
import { ChevronRight, GripVertical, Check } from 'lucide-react';

const treeClasses = "w-full max-w-2xl mx-auto bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 shadow-2xl";
const itemClasses = "group relative flex flex-col gap-2 py-3 px-4 rounded-lg outline-none cursor-pointer text-gray-300 hover:bg-white/5 hover:text-white focus:bg-white/10 focus:ring-1 focus:ring-accent transition-all mb-2";

export function FrameworkTree<T extends object>(props: TreeProps<T>) {
    return (
        <AriaTree {...props} className={treeClasses} />
    );
}

// Minimal Checkbox for structure compatibility
function Checkbox({ slot }: { slot?: string }) {
    return (
        <div className="w-5 h-5 rounded border border-white/20 bg-black/20 flex items-center justify-center">
            <div className="w-2.5 h-2.5 bg-accent opacity-0 group-selected:opacity-100 transition-opacity rounded-[1px]" />
        </div>
    );
}

export function TreeItemContent(
    props: Omit<TreeItemContentProps, 'children'> & { children?: React.ReactNode }
) {
    return (
        <AriaTreeItemContent>
            {(renderProps: TreeItemContentRenderProps) => (
                <div className="flex items-center gap-4 w-full">
                    {renderProps.allowsDragging && (
                        <Button slot="drag" className="text-gray-500 hover:text-white cursor-grab active:cursor-grabbing">
                            <GripVertical size={16} />
                        </Button>
                    )}
                    {renderProps.selectionBehavior === 'toggle' && renderProps.selectionMode !== 'none' && (
                        <Checkbox slot="selection" />
                    )}
                    <Button slot="chevron" className="text-gray-500 group-aria-expanded:rotate-90 transition-transform hidden">
                        <ChevronRight size={16} />
                    </Button>
                    {props.children}
                </div>
            )}
        </AriaTreeItemContent>
    );
}

export interface TreeItemProps extends Omit<AriaTreeItemProps<object>, 'children'> {
    title: React.ReactNode;
    description?: React.ReactNode;
    stepNumber?: number;
    children?: React.ReactNode;
    id?: string | number;
    textValue: string;
}

export function TreeItem({ title, description, stepNumber, children, ...props }: TreeItemProps) {
    return (
        <AriaTreeItem {...props} className={itemClasses}>
            <TreeItemContent>
                <div className="flex items-start gap-4 w-full">
                    {stepNumber && (
                        <div className="shrink-0 w-8 h-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent font-bold text-sm">
                            {stepNumber}
                        </div>
                    )}
                    <div className="flex flex-col gap-1 w-full">
                        <span className="font-medium text-lg text-white group-hover:text-accent transition-colors">{title}</span>
                        {description && <span className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">{description}</span>}
                    </div>
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                        <ChevronRight className="w-5 h-5 text-white/20" />
                    </div>
                </div>
            </TreeItemContent>
            {children}
        </AriaTreeItem>
    );
}
