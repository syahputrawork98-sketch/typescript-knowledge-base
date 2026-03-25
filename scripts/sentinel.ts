import * as fs from 'fs';
import * as path from 'path';

// ============================================================
// Sentinel Audit — TypeScript Knowledge Base (7-Rack Edition)
// Gold Standard PPM V4 Compliance Checker
// ============================================================

const REQUIRED_STANDARDS = [
    'architecture.md',
    'conventions.md',
    'workflow.md',
    'status-protocol.md',
    'contribution.md',
    'core-contribution.md',
];

const SKIP_DIRS = new Set(['.git', 'node_modules', 'scripts', 'assets', 'examples']);

const RACK_PREFIXES = ['RAK-', 'SR-', 'BK-', 'CH-', 'SEC-'];

// -------------------------------------------------------------------
// 1. Check that all required docs/standards files exist
// -------------------------------------------------------------------
function checkStandards(basePath: string): string[] {
    const standardsPath = path.join(basePath, 'docs', 'standards');
    const errors: string[] = [];

    if (!fs.existsSync(standardsPath)) {
        return ['[STANDARDS] docs/standards/ directory is missing.'];
    }

    for (const file of REQUIRED_STANDARDS) {
        if (!fs.existsSync(path.join(standardsPath, file))) {
            errors.push(`[STANDARDS] Missing standard file: ${file}`);
        }
    }

    const repoPlan = path.join(basePath, 'docs', 'repository-plan', 'README.md');
    if (!fs.existsSync(repoPlan)) {
        errors.push('[STANDARDS] Missing repository plan: docs/repository-plan/README.md');
    }

    return errors;
}

// -------------------------------------------------------------------
// 2. Determine if a README.md is marked as "Nil Content" (narrative only)
//    Per convention: unit declares nil content with explicit disclaimer.
// -------------------------------------------------------------------
function isNilContent(filePath: string): boolean {
    const content = fs.readFileSync(filePath, 'utf8');
    return content.includes('Unit ini tidak membutuhkan Lab Praktis/Visualisasi');
}

// -------------------------------------------------------------------
// 3. Audit CH- and SEC- folders for Gold Standard compliance
//    - examples/ is ONLY required when NOT Nil Content
//    - assets/   is always OPTIONAL (may be omitted)
// -------------------------------------------------------------------
function auditChapterFolder(folderPath: string, errors: string[]): void {
    const readmePath = path.join(folderPath, 'README.md');

    if (!fs.existsSync(readmePath)) {
        errors.push(`[STRUCTURE] Missing README.md in: ${folderPath}`);
        return;
    }

    if (isNilContent(readmePath)) {
        // Nil Content units: must NOT have examples/ or assets/ (keep repo clean)
        if (fs.existsSync(path.join(folderPath, 'examples'))) {
            errors.push(`[NIL-CONTENT] Nil Content unit must NOT have examples/ in: ${folderPath}`);
        }
        if (fs.existsSync(path.join(folderPath, 'assets'))) {
            errors.push(`[NIL-CONTENT] Nil Content unit must NOT have assets/ in: ${folderPath}`);
        }
    } else {
        // Normal units: examples/ is required; assets/ is optional
        if (!fs.existsSync(path.join(folderPath, 'examples'))) {
            errors.push(`[GOLD-STANDARD] Missing examples/ folder in: ${folderPath}`);
        }
    }
}

// -------------------------------------------------------------------
// 4. Walk the entire repository and validate structure
// -------------------------------------------------------------------
function auditStructure(basePath: string): string[] {
    const errors: string[] = [];

    function walk(dir: string): void {
        let entries: string[];
        try {
            entries = fs.readdirSync(dir);
        } catch {
            errors.push(`[IO] Cannot read directory: ${dir}`);
            return;
        }

        for (const entry of entries) {
            if (SKIP_DIRS.has(entry)) continue;

            const fullPath = path.join(dir, entry);
            const stat = fs.statSync(fullPath);

            if (!stat.isDirectory()) continue;

            const isKnownPrefix = RACK_PREFIXES.some(p => entry.startsWith(p));
            if (!isKnownPrefix) {
                walk(fullPath);
                continue;
            }

            // Every RAK/SR/BK/CH/SEC must have a README.md
            const readmePath = path.join(fullPath, 'README.md');
            if (!fs.existsSync(readmePath)) {
                errors.push(`[STRUCTURE] Missing README.md in: ${fullPath}`);
            }

            // Additional Gold Standard checks for Chapter (CH-) and Section (SEC-) levels
            if (entry.startsWith('CH-') || entry.startsWith('SEC-')) {
                auditChapterFolder(fullPath, errors);
            }

            walk(fullPath);
        }
    }

    walk(basePath);
    return errors;
}

// -------------------------------------------------------------------
// Main
// -------------------------------------------------------------------
function main(): void {
    const basePath = path.resolve(__dirname, '..');
    console.log('╔══════════════════════════════════════════════════════════╗');
    console.log('║   Sentinel Audit — TypeScript KB (7-Rack Edition)        ║');
    console.log('║   Gold Standard PPM V4 · The Compiler\'s Blueprint        ║');
    console.log('╚══════════════════════════════════════════════════════════╝');
    console.log(`\nAuditing: ${basePath}\n`);

    const errors = [
        ...checkStandards(basePath),
        ...auditStructure(basePath),
    ];

    if (errors.length === 0) {
        console.log('✅ [PASS] Repository is fully compliant with the 7-Rack Gold Standard!');
    } else {
        console.log(`❌ [FAIL] Found ${errors.length} issue(s):\n`);
        for (const err of errors) {
            console.log(`  → ${err}`);
        }
        process.exit(1);
    }
}

main();
